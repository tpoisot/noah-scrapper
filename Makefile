ALL: id.txt

id.txt:
	node get_ids.js >> id.txt
	cat id.txt | sort | uniq > aa.txt
	mv aa.txt id.txt

collect: id.txt
	cat id.txt | xargs -I % node noah.js %
