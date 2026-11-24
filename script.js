function classifyWaste() {
    let waste = document.getElementById("waste")
        .value.toLowerCase();

    let result = "";

    if (waste.includes("plastic") || waste.includes("paper")
        || waste.includes("glass")) {
        result = "Recyclable Waste ♻️";
    }
    else if (waste.includes("food")) {
        result = "Organic Waste – Use for Compost 🌱";
    }
    else if (waste.includes("battery")) {
        result = "Hazardous Waste – Dispose Safely ⚠️";
    }
    else {
        result = "Waste Type Not Identified";
    }

    document.getElementById("result").innerHTML = result;
}