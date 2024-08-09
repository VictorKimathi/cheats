#!/bin/bash

# Bluetooth speaker MAC address (replace with your speaker's MAC address)
SPEAKER_MAC="41:42:64:07:31:E4"

# Command to connect to Bluetooth speaker
echo -e "connect $SPEAKER_MAC\nquit" | bluetoothctl

# Wait for the connection to establish (adjust sleep time as needed)
sleep 10

# Path to your music file


# Command to play music using mpv
# mpv "$MUSIC_FILE"
/usr/bin/rhythmbox-client --play-uri=file:///home/bmk/Downloads/dhambi.mp3

sleep 300
/usr/bin/rhythmbox-client --play-uri=file:///home/bmk/Downloads/victory.mp3
sleep 200
/usr/bin/rhythmbox-client --play-uri=file:///home/bmk/Downloads/earth.mp3
