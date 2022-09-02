import dayjs from 'dayjs';

export function toShortString(str?: string | null | Uint8Array, keepDigitals = 6, maxLength = 16): string {
  const stringify = (str || '').toString();
  if (stringify.length <= maxLength) {
    return stringify;
  }

  return `${stringify.slice(0, keepDigitals)}…${stringify.slice(-keepDigitals)}`;
}

/**
 * 
 * @param time In second
 * @param now 
 * @param shouldTruncate 
 * @returns 
 */
export function timeAgo(time: number, now: number = Date.now(), shouldTruncate?: boolean) {
  time = +time * 1000;
  const d = new Date(time);

  const diff = parseInt(((now - d.valueOf()) / 1000).toString(), 10);
  if (diff < 1) {
    return '0 sec ago';
  } else if (diff < 60) {
    return `${diff} ${diff === 1 ? 'sec' : 'secs'} ago`;
  } else if (diff < 3600) {
    // less 1 hour
    const min = Math.floor(diff / 60);
    return `${min} ${min === 1 ? 'min' : 'mins'} ago`;
  } else if (diff < 86400) {
    // less 1 day
    const hr = Math.floor(diff / 3600);
    const min = Math.floor((diff / 60) % 60);
    if (shouldTruncate) {
      return `${hr} ${hr === 1 ? 'hr' : 'hrs'} ago`;
    } else {
      return `${hr} ${hr === 1 ? 'hr' : 'hrs'}${min === 0 ? '' : min === 1 ? ' 1 min' : ` ${min} mins`} ago`;
    }
  } else if (diff < 90000) {
    // less 1 day 60 min
    const day = Math.floor(diff / 86400);
    const min = Math.floor((diff / 60) % 60);
    if (shouldTruncate) {
      return `${day} ${day === 1 ? 'day' : 'days'} ago`;
    } else {
      return `${day} ${day === 1 ? 'day' : 'days'}${min === 0 ? '' : min === 1 ? ' 1 min' : ` ${min} mins`} ago`;
    }
  } else {
    const day = Math.floor(diff / 86400);
    const hr = Math.floor((diff / 60 / 60) % 24);
    if (shouldTruncate) {
      return `${day} ${day === 1 ? 'day' : 'days'} ago`;
    } else {
      return `${day} ${day === 1 ? 'day' : 'days'}${hr === 0 ? '' : hr === 1 ? ' 1 hr' : ` ${hr} hrs`} ago`;
    }
  }
}


export function parseTimeToUtc(time: number, cFormat?: string, hasUTCText = true) {
  if (arguments.length === 0) {
    return '';
  }
  if (!time) {
    return '';
  }
  if ((time + '').length >= 10) {
    time = +time * 1000;
  }
  const format = cFormat || 'YYYY-MM-DD HH:mm:ss';
  const date = dayjs(time);
  if (hasUTCText) {
    return `${date.format(format)} (+UTC)`;
  } else {
    return `${date.format(format)}`;
  }
}