from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student 
from .serializers import StudentSerializer
from rest_framework import status
from rest_framework.views import APIView
# @api_view()
# def hello_world(request):
# 	return Response({'msg':'HelloWorld'})

# @api_view(['GET','POST'])
# def hello_world(request):
# 	if request.method == 'GET':
# 		return Response({'msg':'GET Request'})
# 	if request.method == 'POST':
# 		print(request.data)
# 		return Response({'msg':'POST request'})

# Function based api_view
@api_view(['GET', 'POST', 'PUT','PATCH', 'DELETE'])
def student_api(request, pk=None):
	if request.method == 'GET':
		id=pk
		if id is not None:
			stu=Student.objects.get(id=id)
			serializer = StudentSerializer(stu)
			return Response(serializer.data)
		stu=Student.objects.all()
		serializer=StudentSerializer(stu,many=True)
		return Response(serializer.data)

	if request.method == 'POST':
		serializer=StudentSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response({'msg':'Data created'}, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	if request.method == 'PUT':
		id=pk

		stu=Student.objects.get(pk=id)
		serializer=StudentSerializer(stu, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response({'msg':'Complete Data Updated'})
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	if request.method == 'PATCH':
		id=pk

		stu=Student.objects.get(pk=id)
		serializer=StudentSerializer(stu, data=request.data,partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response({'msg':'Partial Data Updated'})
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	if request.method == 'DELETE':
		id=pk
		stu=Student.objects.get(pk=id)
		stu.delete()
		return Response({'msg':'Data deleted'})

# Class based APIView
class StudentAPI(APIView):
	def get(self,request, pk=None, format=None):
		id=pk
		if id is not None:
			stu=Student.objects.get(id=id)
			serializer = StudentSerializer(stu)
			return Response(serializer.data)
		stu=Student.objects.all()
		serializer=StudentSerializer(stu,many=True)
		return Response(serializer.data)


	def post(self,request,format=None):
		serializer=StudentSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response({'msg':'Data created'}, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)		

	def put(self,request, pk, format=None):
		id=pk

		stu=Student.objects.get(pk=id)
		serializer=StudentSerializer(stu, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response({'msg':'Complete Data Updated'})
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def patch(self,request, pk ,format=None):
		id=pk

		stu=Student.objects.get(pk=id)
		serializer=StudentSerializer(stu, data=request.data,partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response({'msg':'Partial Data Updated'})
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self,request,pk,format=None):
		id=pk
		stu=Student.objects.get(pk=id)
		stu.delete()
		return Response({'msg':'Data deleted'})
