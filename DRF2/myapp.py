import requests
import json

URL="http://localhost:8000/studentdata/"

def getData(id=None):
	data={}
	if id is not None:
		data = {'id':id}

	headers={'content-Type':'application/json'}

	json_data=json.dumps(data)

	r = requests.get(url=URL,headers=headers, data=json_data)

	data=r.json()

	print (data)

# getData()

def postData():
	data={
		'name':'mmNiraj',
		'roll':20000,
		'city':'Butwnnal'
	}
	headers={'content-Type':'application/json'}

	json_data=json.dumps(data)

	r=requests.post(url=URL, headers=headers, data=json_data)
	data=r.json()
	print(data)

# postData()

def updateData():
	data={
		'id':1,
		'name':'Nischal',
		'city':'Pokhara'
	}
	headers={'content-Type':'application/json'}

	json_data=json.dumps(data)

	r=requests.put(url=URL,headers=headers,data=json_data)
	data=r.json()
	print(data)

# updateData()

def deleteData():
	data={
		'id':2
	}
	headers={'content-Type':'application/json'}

	json_data=json.dumps(data)

	r=requests.delete(url=URL,headers=headers,data=json_data)
	data=r.json()
	print(data)

deleteData()
