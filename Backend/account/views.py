from django.shortcuts import render

from rest_framework.viewsets import ViewSet
from rest_framework.response import Response

from .models import Employee,Bonus
from .serializers import EmployeeModelSer,EmployeeUpdateModelSer,BonusModelSer

from rest_framework.decorators import action
# Create your views here.

class EmployeeViewSet(ViewSet):

    def create(self,request,*args,**kwrags):
        ser=EmployeeModelSer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response({"msg":"created"})        
        return Response({"msg":"failed"})

    def retrieve(self,request,*args,**kwargs):
        id=kwargs.get('pk')
        ob=Employee.objects.get(id=id)
        dser=EmployeeModelSer(ob)
        return Response(dser.data)
    
    def list(self,request,*args,**kwargs):
        ob=Employee.objects.all()
        dser=EmployeeModelSer(ob,many=True)
        return Response(dser.data)
    
    def partial_update(self,request,*args,**kwargs):
        id=kwargs.get('pk')
        ob=Employee.objects.get(id=id)
        ser=EmployeeUpdateModelSer(data=request.data,instance=ob)
        if ser.is_valid():
            ser.save()
            return Response({"msg":"updated"})
        return Response({"msg":"failed"})
    
    def destroy(self,request,*args,**kwargs):
        id=kwargs.get('pk')
        ob=Employee.objects.get(id=id)
        ob.delete()
        return Response({"msg":"deleted"})
    

    @action(methods=['POST'],detail=True)
    def add_bonus(self,request,*args,**kwargs):
        eid=kwargs.get('pk')
        emp=Employee.objects.get(id=eid)
        ser=BonusModelSer(data=request.data)
        if ser.is_valid():
            ser.save(employee=emp)
            return Response({"msg":"added"})
        return Response({"msg":"Failed"})
    
    
    @action(methods=['GET'],detail=True)
    def view_bonus(self,request,*args,**kwargs):
        eid=kwargs.get('pk')
        emp=Employee.objects.get(id=eid)
        bonus=Bonus.objects.filter(employee=emp)
        dser=BonusModelSer(bonus,many=True)
        print(dser)
        return Response(dser.data)

        
