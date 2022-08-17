PLANNING THE PROJECT.


what are the routers of the server? - there will be 2 datatbases, users and shows?

get:
    -all users
    -one user
    shows watched by one user
    all shows
    one show
    shows of specific genre

put:
    -update the statis of a show - is it cancelled or still on air or streaming, maybe is a movie crrently streaming or not, yes or no, should be a boolean.
    -update the rating of a show
    -update to add a show is a users watched it.

delete:
    one show

shows- name, genre, rating, streaming
users- name, list of shows watched

many to many relationship

make plan, build models, seed data, set out folders