import json

def getAllAvailableSounds():
    data =  {}
    with open('available_sounds.json') as json_file:
        data = json.load(json_file)
    return data

def storeNewSounds():
    pass
# with open('data.txt', 'w') as outfile:
#     json.dump(data, outfile)
#
#
# with open('data.txt') as json_file:
#     data = json.load(json_file)
#     for p in data['people']:
#         print('Name: ' + p['name'])
#         print('Website: ' + p['website'])
#         print('From: ' + p['from'])
#         print('')
#
