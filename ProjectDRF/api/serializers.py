from rest_framework import serializers
from .models import Student

# Validator
def start_with_n(value):
	if value[0].lower() != 'n':
		raise serializers.ValidationError('Name should start with N')

class StudentSerializer(serializers.Serializer):
	# id=serializers.IntegerField()
	name=serializers.CharField(max_length=100, validators=[start_with_n])
	roll=serializers.IntegerField()
	city=serializers.CharField(max_length=100)

	def create(self,validated_data):
		return Student.objects.create(**validated_data)

	def update(self,instance,validated_data):
		instance.name=validated_data.get('name',instance.name)
		instance.roll=validated_data.get('roll',instance.roll)
		instance.city=validated_data.get('city',instance.city)
		instance.save()
		return instance

	#Field level validation
	def validate_roll(self,value):
		if value > 200:
			raise serializers.ValidationError('Seat Full')
		return value

	#Object level validation
	#If multiple field are involved then,object level validation is used.
	def validate(self,data):
		name=data.get('name')
		city=data.get('city')

		if name.lower() == 'niraj' and city.lower() != 'butwal':
			raise serializers.ValidationError('Niraj is from Butwal')
		return data

# The priorities of validation : validator, field level validation , object level validation