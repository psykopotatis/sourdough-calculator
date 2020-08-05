from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def index(request):
    template = loader.get_template('sourdough/index.html')
    context = {
        'latest_question_list': 'apa',
    }
    return HttpResponse(template.render(context, request))

def planning(request):
    template = loader.get_template('sourdough/planning.html')
    context = {
        'latest_question_list': 'apa',
    }
    return HttpResponse(template.render(context, request))

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

@csrf_exempt
def save(request):
    if request.method == "POST":
    	name = request.POST['name']
    	flour = request.POST['flour']
    	water = request.POST['water']
    	sourdough = request.POST['sourdough']
    	salt = request.POST['salt']
    	# todo. parse int/float

    	print(name)
    	print(flour)
    	print(request.POST)

    	# recipe model

    	# migrate

    	# create recipe

    	# slugify name as url

    	# save to db

    	# return url

    	# client: redirect to url

    else:
    	print('get not accepted')

    return HttpResponse("Save");
