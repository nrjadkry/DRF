from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse

import io
from rest_framework.parsers import JSONParser

from django.views.decorators.csrf import csrf_exempt

#Serialization
#Model Object- single student data
def Student_Detail(request,pk):
	stu=Student.objects.get(id=pk)
	serializer=StudentSerializer(stu)
	return JsonResponse(serializer.data)
	# json_data=JSONRenderer().render(serializer.data)
	# return HttpResponse(json_data,content_type='application/json')

#QuerySet - all student data
def Student_info(request):
	stu=Student.objects.all()
	serializer=StudentSerializer(stu,many=True)
	# json_data=JSONRenderer().render(serializer.data)
	# return HttpResponse(json_data,content_type='application/json')
	return JsonResponse(serializer.data,safe=False)

#De-serialization
@csrf_exempt
def create_student(request):
	if request.method == 'POST':
		json_data=request.body
		stream=io.BytesIO(json_data)
		python_data=JSONParser().parse(stream)

		serializer=StudentSerializer(data=python_data)
		if serializer.is_valid():
			serializer.save()
			res={'msg':'Data Inserted'}
			json_data=JSONRenderer().render(res)
			return HttpResponse(json_data,content_type='application/json')

		json_data=JSONRenderer().render(serializer.errors)
		return HttpResponse(json_data,content_type='application/json')


@csrf_exempt
def student_api(request):
	if request.method == 'GET':
		json_data=request.body
		stream=io.BytesIO(json_data)
		python_data=JSONParser().parse(stream)

		id=python_data.get('id',None)

		if id is not None:
			stu=Student.objects.get(id=id)
			serializer=StudentSerializer(stu)
			json_data=JSONRenderer().render(serializer.data)
			return HttpResponse(json_data,content_type='application/json')

		stu=Student.objects.all()
		serializer=StudentSerializer(stu, many=True)
		json_data=JSONRenderer().render(serializer.data)
		return HttpResponse(json_data,content_type='application/json')

	if request.method == 'POST':
		json_data=request.body
		stream=io.BytesIO(json_data)
		python_data=JSONParser().parse(stream)

		serializer=StudentSerializer(data=python_data)
		if serializer.is_valid():
			serializer.save()
			res={'msg':'Data saved'}
			json_data=JSONRenderer().render(res)
			return HttpResponse(json_data,content_type='application/json')

		json_data=JSONRenderer().render(serializer.errors)
		return HttpResponse(json_data,content_type='application/json')

	if request.method == 'PUT':
		json_data=request.body
		stream=io.BytesIO(json_data)
		python_data=JSONParser().parse(stream)

		id=python_data.get('id')

		stu=Student.objects.get(id=id)

		serializer=StudentSerializer(stu,data=python_data, partial=True)
		if serializer.is_valid():
			serializer.save()
			res={'msg':'Data Updated'}
			json_data=JSONRenderer().render(res)
			return HttpResponse(json_data,content_type='application/json')

		json_data=JSONRenderer().render(serializer.errors)
		return HttpResponse(json_data,content_type='application/json')


	if request.method == 'DELETE':
		json_data=request.body
		stream=io.BytesIO(json_data)
		python_data=JSONParser().parse(stream)

		id=python_data.get('id')

		stu=Student.objects.get(id=id)
		stu.delete()

		res={'msg':'Data Deleted'}

		# json_data=JSONRenderer().render(res)
		# return HttpResponse(json_data,content_type='application/json')

		return JsonResponse(res,safe=False)


