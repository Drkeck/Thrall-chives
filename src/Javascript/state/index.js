// we will be using this to store relevent data on given paths.
<<<<<<< HEAD
let appData = [{ userData: {
    currentView: "home",
    lastView: '',
    Data: {},
    
}}];
=======
let appData = [
    {
        client: '',
        comm: '',
        doc:'',

    }
];
>>>>>>> 1044648c0adfd75b303b733f656bc39071b081f4

function changeAppData (data, changeType, changeData) {
    console.log(data);
    console.log(changeType);
    console.log(changeData);
}

module.exports = { appData, changeAppData }