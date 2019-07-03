import pandas as pd
import xlrd
from elasticsearch import Elasticsearch

# Import Excel File and store all questions,answers in lists
df = pd.read_excel('TMUS.xlsx')
Titles = df['Title'].to_list()
Answers = df['Answer (Default)'].to_list()

numberRows = len(Titles)

for i in range(0,numberRows):
    print('Question : ' + str(Titles[i]) )
    print('Answer : ' + str(Answers[i]) )
    print()


# Elastic Search
es = Elasticsearch()

for y in range(0,numberRows):
    doc = {
        'question': Titles[y],
        'answer': Answers[y]
    }
    res = es.index(index="faq", doc_type='_doc', id=(y+1), body=doc)
    print(res['result'])
    print(y+1)
