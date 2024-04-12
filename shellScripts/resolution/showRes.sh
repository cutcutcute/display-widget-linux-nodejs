#!/bin/bash

resolution=$(xdpyinfo | awk '/dimensions:/ {print $2}')
width=$(echo $resolution | cut -d 'x' -f 1)
height=$(echo $resolution | cut -d 'x' -f 2)

width=$(expr $width + 0)
height=$(expr $height + 0)

echo $width
echo $height