from django.db import models

# Create your models here.

class Employee(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    dob=models.DateField()
    gender=models.CharField(max_length=100)
    phone=models.IntegerField()
    email=models.EmailField()
    place=models.CharField(max_length=100)
    dept=models.CharField(max_length=100)
    job_title=models.CharField(max_length=100)
    profile=models.ImageField(upload_to='employee_profiles')

    def emp_bonus(self):
        return self.bonus_set.all()



class Bonus(models.Model):
    bonus_name=models.CharField(max_length=100)
    amount=models.IntegerField()
    date=models.DateField(auto_now_add=True)
    employee=models.ForeignKey(Employee,on_delete=models.CASCADE)