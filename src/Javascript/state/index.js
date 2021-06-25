// we will be using this to store relevent data on given paths.
let appData = [{ userData: {
    currentView: "home",
    lastView: '',
    LatestData: {},
    
}}];

function changeAppData (data, changeType, changeData) {
    console.log(data);
    console.log(changeType);
    console.log(changeData);
}

module.exports = { appData, changeAppData }