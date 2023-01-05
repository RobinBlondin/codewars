function ipsBetween(start, end)
{
    const startArr = start.split('.').reverse();
    const endArr = end.split('.').reverse();
    let count = 0;
    
    for (let i = 0; i < startArr.length; i++) 
    {
        count += (endArr[i] - startArr[i]) * (Math.pow(256, i))
    }
    return count;
}

module.exports = ipsBetween;