import os
import json
# iterate a folder and get the band name from the image file name
# 2019-01-01    PV
def getBandNames(folder):
    # save the names as json string format index, name, img file name
    bandLogoInfo = []
    fileCount = 1
    for file in os.listdir(folder):
        # split the file name to get the band name
        # file name format: bandName.jpg
        bandName = file.upper().strip().split('.')[0]
        imgLink = file
        index = fileCount
        fileCount += 1
        bandLogoInfo.append({'index': index, 'name': bandName, 'img': imgLink})
    # save the band logo info to a json file locally
    with open('bandLogoInfo.json', 'w') as outfile:
        json.dump(bandLogoInfo, outfile)

    return bandLogoInfo
getBandNames('D:\deathmetalguesser\dmg\public\logos')