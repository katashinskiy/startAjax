

let ajax = (function () {
    function Start(setting){
        const varAjax = new XMLHttpRequest();

        varAjax.addEventListener("timeout", function () {
            console.log("timeout Error");
        });

        varAjax.addEventListener("load", ev => {
           setting.info(varAjax.response);
        });

        varAjax.addEventListener("error", ev => {
            setting.error({
                errorType: varAjax.status,
                errorTypeText: varAjax.statusText
            });
        });

        varAjax.open(setting.method, setting.url);

        varAjax.timeout = setting.timeout || 2000;

        if(setting.headers){
            for(let headerName in setting.headers){
                varAjax.setRequestHeader(headerName,setting.headers[headerName]);
            }
        }

        varAjax.send(setting.data);
    }
    return{
        Start
    }
}());