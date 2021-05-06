

function submitStocks(){
    let stock = document.getElementById("ticker-value").value;
    let mini_symbol = `<div id="t-info" class="ticker-info">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
        <a href="https://ru.tradingview.com/symbols/${stock}/?exchange=FX" rel="noopener"
            target="_blank"><span class="blue-text">Цена ${stock}</span></a> от TradingView</div>
    <script type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
        {
            "symbol": "${stock}",
            "width": "100%",
            "height": "100%",
            "locale": "ru",
            "dateRange": "1M",
            "colorTheme": "true",
            "trendLineColor": "#37a6ef",
            "underLineColor": "rgba(55, 166, 239, 0.15)",
            "isTransparent": true,
            "autosize": false,
            "largeChartUrl": ""
        }
    </script>
</div>
`

let widget_symbol =   `<div class="ticker-prices">
<div class="tradingview-widget-container__widget"></div>
<script type="text/javascript"
    src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js" async>
    {
        "symbol": "${stock}",
        "width": "100%",
        "locale": "ru",
        "colorTheme": "white",
        "isTransparent": true
    }
</script>
</div>
</div>`
        
let tech_analysis = `<div class="ticker-tech-analysis">
<div class="tradingview-widget-container__widget"></div>

<script type="text/javascript"
    src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
    {
        "interval": "1m",
        "width": "100%",
        "isTransparent": true,
        "height": "100%",
        "symbol": "${stock}",
        "showIntervalTabs": true,
        "locale": "ru",
        "colorTheme": "light"
    }
</script>
</div>`


        document.getElementById("place_for_mini").innerHTML = mini_symbol;
        document.getElementById("place_for_tech_analysis").innerHTML = tech_analysis;
        document.getElementById("place_for_symbol_info").innerHTML = widget_symbol;
    
        var script= document.createElement('script');
        script.src= "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
        document.body.appendChild(script);
        document.body.removeChild(script);

        
        var script= document.createElement('script');
        script.src= "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
        document.body.appendChild(script);
        document.body.removeChild(script);


        var script= document.createElement('script');
        script.src= "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
        document.body.appendChild(script);
        document.body.removeChild(script);

}

document.getElementById("submitBtn").addEventListener("click", submitStocks); 

const checkboxTheme = document.getElementById('changeTheme');
checkboxTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});