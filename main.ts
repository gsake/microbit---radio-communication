input.onButtonPressed(Button.A, function () {
    radio.sendString("test")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "test") {
        basic.showIcon(IconNames.Heart)
    }
})
radio.setGroup(99)
