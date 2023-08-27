const massRetained = [3.23, 15.11, 14.92, 10.54, 34.21, 14.24, 4.05, 2.81, 0.84, 0.05]

const calculateReadings = () => {

    let totalMass = 0
    const cumulativeMassRetained = []
    const percentageCumulativeMassRetained = []
    const percentagePassing = []

    for (x of massRetained) {
        totalMass = totalMass + x
        cumulativeMassRetained.push(parseFloat(totalMass).toFixed(2))
    }

    for (y of cumulativeMassRetained) {
        const PCM = (y / totalMass.toFixed(2)) * 100
        percentageCumulativeMassRetained.push(parseFloat(PCM).toFixed(2))
        percentagePassing.push(parseFloat(totalMass.toFixed(2) - PCM.toFixed(2)).toFixed(2))
    }
    

    console.log("=========== Cumulative Mass Retained =========== \n")
    console.log(cumulativeMassRetained.join('\n'))
    console.log("\n=========== Percentage Cumulative Mass Retained =========== \n")
    console.log(percentageCumulativeMassRetained.join('\n'))
    console.log("\n=========== Percentage Passing =========== \n")
    console.log(percentagePassing.join('\n'))
}

calculateReadings()