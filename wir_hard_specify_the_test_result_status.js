// Expected Result : [
//   { name: "Susanti", id: "1", score: 4, status_test: "fresher" },
//   { name: "Mei", id: "2", score: 7, status_test: "junior" },
//   { name: "Ros", id: "3", score: 9, status_test: "senior" },
//   { name: "Mail", id: "4", score: 2, status_test: "fresher" },
// ];

// Direction : Please specify the test result status for each candidate (arr2) based on indicator (arr1)
// Note : arr1 must be used

const arr1 = [
    { min_score: 1, status: "fresher" },
    { min_score: 5, status: "junior" },
    { min_score: 8, status: "senior" },
];
  
const arr2 = [
    { name: "Susanti", id: "1", score: 4, status_test: "" },
    { name: "Mei", id: "2", score: 7, status_test: "" },
    { name: "Ros", id: "3", score: 9, status_test: "" },
    { name: "Mail", id: "4", score: 2, status_test: "" },
];

function result(arr1, arr2) {
    // Your Code Here
    scoringTmp = {}
    arr1.forEach((item, index) => {
        nextIndex = index + 1
        if (arr1[nextIndex]) {
            for (let i = item.min_score; i < (arr1[nextIndex].min_score); i++) {
                if (i < arr1[nextIndex].min_score) {
                    scoringTmp[i] = item
                }
            }
        } else {
            scoringTmp[item.min_score] = item
        }
    })
    const res = arr2.map(item => {
        const minHighTier = arr1[arr1.length - 1]
        const score = scoringTmp[item.score]
        item.status_test = score ? score.status : item.score >= minHighTier.min_score && minHighTier.status
        return item
    })
    return res
}

console.log(result(arr1, arr2));


function onBuy() {
    alert('success')
}

function onClickCard() {
    alert('card is selected')
}