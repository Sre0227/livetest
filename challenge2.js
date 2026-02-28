testResults = ["pass", "pass", "fail", "pass", "skip", "pass", 
    "fail", "pass"]
    const frequency = {}
    for(let i=0;i<testResults.length;i++){
        const value = testResults[i]
        if(frequency[value]){
            frequency[value]++

        }else{
            frequency[value]=1
        }

    }
    for(const value in frequency){
        console.log(`${value} is present ${frequency[value]} times`)
    }
