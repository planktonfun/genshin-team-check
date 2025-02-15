rm -rf ./latest
rm latest.zip
mv compressed_png.zip latest.zip
unzip latest.zip -d latest
git add latest
git commit -m "update latest"
echo "{\"initial\": \"d09d22\", \"zipSHA\": \"$(git log -1 --format="%H")\", \"size\": $(stat --format="%s" latest.zip)}" > versions.json
git add .
git commit -m "update zip files"
gpsj

