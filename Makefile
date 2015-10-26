ALL: id.txt

id.txt:
	node get_ids.js > id.txt

collect: id.txt
	cat id.txt | xargs -I % node noah.js %
