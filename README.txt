Hackathon 2019

Set up docker:
- lookup docker docs on Mac desktop docker edition
- very simple to implement

Elastic search set up:
DOCS: https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html

-  screen ~/Library/Containers/com.docker.docker/Data/vms/0/tty
    - Allows you to run system control commands to the docker VM
- sysctl -w vm.max_map_count=262144
    - Sets the env variable, settings for elastic search
- exit terminal
- Docker-compose up
    - Ctrl-z , bg , jobs
    - Or @ to make it go in bg
- curl http://127.0.0.1:9200/_cat/health
    - Make sure cluster is running
- http://127.0.0.1:9200/_cat/indices?v
    - To see indices
- Create an index(example)
    - curl -X PUT "http://127.0.0.1:9200/faq?pretty"
    - Faq is the name of the index
- To see all indexes
    - curl http://127.0.0.1:9200/_cat/indices?v
- To add a record to an index
    - curl -X PUT "http://127.0.0.1:9200/faq/_doc/1?pretty" -H 'Content-Type: application/json' -d'
    - {
    - "question": "Where is my ticket?",
    - "answer": "Why do you ask?"
    - }
    - '
- Query elastic search:
    - curl -X GET "http://127.0.0.1:9200/faq/_doc/1?pretty"


TO DO
1. Parse the data -> FaQ data (few hours)
    - Parse it as document that I pushing it into elastic search
    - Probably going to push it as one index(table)
    - With each question and answer is a separate record being a new record
- Simplest implementation possible:
    - A. Create an elastic search instance (DONE)
    - B. Create an index with there (DONE)
    - C. Put the parsed data in the index
    -
2. Write an interface to make queries to get the data back (this is react widget)
    - Build an interface to query that index
    - What ever the user types in
    - It will create an elastic search query
    - That query will return all the questions and answers that match that query
    - Take that top one and show the question and answer to the user
        - The top one is the magic of elastic search
- 3. Add the chrome extend to integrate onto ticketmaster -> tamperMonkey chrome extension
- 4. If extra time this is where we can implement NLP to make the elastic search even more accurate by basing it off parts of speech
