type FilterOptions = {
  deep?: boolean;
}

export function isObject (value: unknown): value is Record<string, unknown> {
return value !== null && typeof value === 'object';
}

export function isArray (value: unknown): value is unknown[] {
return Array.isArray(value);
}

export function filterProperties<T extends Record<string, unknown> | unknown[]> (
object: T,
filter: (target: T, key: keyof T, path: (keyof T)[]) => boolean,
options: FilterOptions,
path: (keyof T)[] = []
): T {
return (Object.keys(object) as Array<keyof typeof object>).reduce((result, key) => {
  const currentVal = object[key];
  let value: T | T[keyof T] = currentVal;

  if (filter(object, key, path.concat(key))) {
    if (isObject(currentVal) && options.deep) {
      value = filterProperties<T>(currentVal as T, filter, options, path.concat(key));
    }

    if (isArray(result)) {
      result.push(value);
    } else {
      result[key] = (value as T[keyof T]);
    }
  }

  return result;
}, (isArray(object) ? [] : {}) as T);
}
