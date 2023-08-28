datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        . . . . .
        . # # # #
        . . . # #
        . # # # #
        . # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "temperatura",
    "Humedad",
    "Gas"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"Temperatura",
"Humedad",
"Gas"
)
loops.everyInterval(60000, function () {
    if (logging) {
        basic.showIcon(IconNames.Heart)
        datalogger.log(
        datalogger.createCV("temperature", Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P8)),
        datalogger.createCV("Humedad", Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P8)),
        datalogger.createCV("GAS", pins.analogReadPin(AnalogPin.P0)),
        datalogger.createCV("", 0)
        )
        basic.showString("hum")
        basic.showString("" + (Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P8)))
        basic.showString("Temp")
        basic.showString("" + (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P8)))
        basic.showString("Gas")
        basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
        basic.clearScreen()
    }
})
