var login = false;
$(function(){
    UpdateHideFunction();
});


function UpdateHideFunction(){
    console.log("Update Start");
    /*
    if(login == false){
        $.sceditor.plugins.bbcode.bbcode.set("hide",{
            styles: {
                "stylename": null,
            },
            tags: {
                "tag": null
            },
            breakBefore : true,
            breakAfter : true,
            format: "[hide]{0}[/hide]",
            html: '<hide>Hidden_Data</hide>',
            quoteType: $.sceditor.BBCodeParser.QuoteType.auto
        })
    }
    */
    $.sceditor.plugins.bbcode.bbcode.set("hide",{
            styles: {
                "stylename": null,
            },
            tags: {
                "tag": null
            },
            breakBefore : true,
            breakAfter : true,
            format: "[hide]{0}[/hide]",
            html: '<hide>Hidden_Data</hide>',
            quoteType: $.sceditor.BBCodeParser.QuoteType.auto
        })
    $.sceditor.command.set("hide", {
        exec: function() {
            this.insert("a");
        },
        txtExec: function() {
            this.insert("a");
        },
        tooltip: "hide text"
    });
    
    console.log("Update End");
}
function Login() {
    login = true;
};
function Logout() {
    login = false;
};