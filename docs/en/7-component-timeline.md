# TimeLine component

Visually present time flow information.

---

## Create a transaction timeline with Index

The default test data does not have an Index property, we add a column to the test data, with values from 1 to 3.

You can also directly paste the above data into the Data box of the TimeLine component.

Like the Table component, the TimeLine component also has a Columns property, which makes it easy to add columns, click the + icon, and set the column details in the Column pop-up window, Title: Index, Key is the Object key that binds the data source, in this example it is the key `index` that we added to the test data in the first step. Type select `text`, indicating text component. Through the above operation, TimeLine has displayed the Index column.

The last step is to adjust the order of the columns, on the right side of the Columns menu, there are `up arrow`, `down arrow`, `trash` icons. By clicking the `up arrow`, move the Index column to the first position.

![Component icon](../assets/images/component-timeline.png)

Effect:

![Component icon](../assets/images/component-timeline-01.png)
