
        // Exchange rate data
        const exchangeRates = {
            USD: { EUR: 0.85, INR: 82.0, USD: 1 },
            EUR: { USD: 1.18, INR: 96.5, EUR: 1 },
            INR: { USD: 0.012, EUR: 0.010, INR: 1 }
        };

        // Function to convert currency
        function convertCurrency() {
            // Get values from input and dropdowns
            const amount = document.getElementById("amount").value;
            const fromCurrency = document.getElementById("fromCurrency").value;
            const toCurrency = document.getElementById("toCurrency").value;

            // Validation for empty input
            if (!amount || amount <= 0) {
                document.getElementById("result").innerText = "Please enter a valid amount.";
                return;
            }

            // Perform conversion using exchange rates
            const rate = exchangeRates[fromCurrency][toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            // Display result
            document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        }
