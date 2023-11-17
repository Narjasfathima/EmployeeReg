from rest_framework import serializers
from .models import Employee,Bonus


class BonusModelSer(serializers.ModelSerializer):    
    employee=serializers.CharField(read_only=True)
    date=serializers.DateField(read_only=True)
    class Meta:
        model=Bonus
        fields="__all__"


class EmployeeModelSer(serializers.ModelSerializer):
    emp_bonus=BonusModelSer(read_only=True,many=True)
    class Meta:
        model=Employee
        fields="__all__"


class EmployeeUpdateModelSer(serializers.ModelSerializer):
    class Meta:
        model=Employee
        exclude=['profile']


class BonusModelSer(serializers.ModelSerializer):    
    employee=serializers.CharField(read_only=True)
    date=serializers.DateField(read_only=True)
    class Meta:
        model=Bonus
        fields="__all__"