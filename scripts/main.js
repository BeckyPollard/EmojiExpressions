//██████████ APP SETUP ██████████
const app = {};
//██████████ SETUP API ██████████
app.setup = function() {
    //IMAGE TO POST
    const sourceImageUrl = $(".inputImage").value;
    //API CALL
    return $.ajax({
        url: "https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender,smile,facialHair,glasses,emotion,hair,makeup",
        headers: {
            "Content-Type": "application.json",
            "Accept": "application/json",
            "Ocp-Apim-Subscription-Key": "d4200ef51ed143d29345415ba54ad725"
        },
        method: "POST",
        data: '{"url": ' + '"' + sourceImageUrl + '"}', //TODO: TEMPLATE LITERAL THIS
    });
}
//██████████ EMOJI DATA ██████████
app.emojis = function() {
    const emoji = {
        'happy': 'INPUT HAPPY EMOJI HERE',
        'happy': 'INPUT HAPPY EMOJI HERE',
        'happy': 'INPUT HAPPY EMOJI HERE',
        'happy': 'INPUT HAPPY EMOJI HERE'
    }
}
//██████████ INIT SETUP ██████████
//██████████ INIT SETUP ██████████
app.init = function(){
    app.setup();
}
//██████████ INITIALIZE ██████████
$(function(){
  app.init();
}); 