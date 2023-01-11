// $("body").append(
//     $(`<div>
//     ${setInterval(() => {
//         $("div").html(`${new Date().getDate()}/
//     ${new Date().getMonth()+1}/
//     ${new Date().getFullYear()} 
//     ${new Date().getHours()}:
//     ${new Date().getMinutes()}:
//     ${new Date().getSeconds()}`)}
//     , 5000)}
//     </div>`))
    



let runTime = () => {
        let test = () => {$("div").text(`${new Date().getDate()}/
        ${new Date().getMonth()+1}/
        ${new Date().getFullYear()} 
        ${new Date().getHours()}:
        ${new Date().getMinutes()}:
        ${new Date().getSeconds()}`)}
        let setIntervalAndExecute = (fn, t) => {
            fn();
            return(setInterval(fn, t));
        };
        setIntervalAndExecute(test, 30000);
    }

$("body").append($(`<div>${$(runTime).val()}</div>`))