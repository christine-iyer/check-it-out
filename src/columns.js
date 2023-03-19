const columns = [
     {
         name: 'class',
         selector: row => row.class,
     },
     {
         name: 'prodInventoryName',
         selector: row => row.prodInventoryName,
     },
     {
          name: 'detail',
          selector: row => row.detail,
      },
      {
          name: 'prodX',
          selector: row => row.prodX,
      },
      {
          name: 'unitMeas',
          selector: row => row.unitMeas,
      },
      {
          name: 'unitNow',
          selector: row => row.unitNow,
      },
      {
          name: 'unitCost',
          selector: row => row.unitCost,
      },
      {
          name: 'cost',
          selector: row => row.cost,
      },
      {
          name: 'recipes',
          selector: row => row.recipes,
      }
 ];
 export default columns;