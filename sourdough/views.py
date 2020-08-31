from django.http import HttpResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from django.utils.text import slugify
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
import json

# Create your views here.
from sourdough.models import Recipe


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


def detail(request, recipe_id, slug):
    recipe = get_object_or_404(Recipe, pk=recipe_id)
    context = {
        'recipe': recipe,
    }
    return render(request, 'sourdough/recipe_detail.html', context)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


@csrf_exempt
def save(request):
    if request.method == "POST":
        print(request.POST)
        print(request.body)
        json_data = json.loads(request.body)
        print(json_data)
        print(json_data.get('ingredients'))
        ingredients = json_data.get('ingredients')
        name = json_data.get('name')
        print(name)
        for key in ingredients.keys():
            print(ingredients[key])
            ingredient = ingredients[key]
            name = ingredient.get('name')
            weight = ingredient.get('weight')
            percent = ingredient.get('percent')
            selected = ingredient.get('selected')
            print(name, weight, percent)
            # todo. parse int/float

        print(name)

        recipe = Recipe(
            name=name,
            flour=float(flour),
            water=float(water),
            sourdough=float(sourdough),
            salt=float(salt)
        )

        recipe.save()

        # What does it slugify if name is empty?
        slug = slugify(recipe.name)
        print(slug)

        # Create url
        url = '/recipe/{}/{}'.format(recipe.id, slug)
        print(url)

        data = {
            'result': 'ok',
            'url': url
        }
        return JsonResponse(data)
    else:
        data = {
            'result': 'error',
            'url': ''
        }
        return JsonResponse(data)
