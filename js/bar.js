var chart = new ej.charts.Chart({
    //Initializing primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: "Notable Transactions"   
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Millions"
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: [
                {
                    notableTransactions:"21-Mar - 385-395 Nordhoff Drive, Englewood, NJ", millions: 130
                },
                {
                    notableTransactions:"21-Mar - 1440 Broadway, New York, NY", millions: 399
                },
                {
                    notableTransactions:"21-Mar - 950 Third Street, Los Angeles, CA", millions: 112
                },
            ],
            xName: "Notable Transactions",
            yName: "Millions"
        }
    ]
});
chart.appendTo("#container");