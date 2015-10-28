ALL: id.txt

id.txt: possible_ids.js
	node $< >> $@

collect: id.txt
	cat id.txt | xargs -P 3 -I % node noah.js %

refine: id.txt
	ls spottings/*json | cut -d/ -f 2 | cut -d. -f 1 > got.txt
	cat {got.txt,id.txt} | sort -u | sort -R > _id.txt
	mv _id.txt id.txt
	rm got.txt
