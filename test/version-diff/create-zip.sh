rm latest.zip
node compress.js
echo "{\"initial\": \"d09d22\", \"zipSHA\": \"$(git log -1 --format="%H")\"}" > versions.json