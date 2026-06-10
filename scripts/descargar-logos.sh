#!/bin/bash
# Descarga los logos de "Quiénes nos respaldan" y la imagen del plan de estudios
# desde los servidores originales de Wix (ucmac.edu.mx) hacia /public.
# Ejecutar desde la raíz del repo:  bash scripts/descargar-logos.sh

set -e
mkdir -p public/respaldos public/brand

BASE="https://static.wixstatic.com/media"

echo "Descargando logos de respaldos..."
curl -fsSL "$BASE/573f04_b93eae4696db4132a6eb7ebda41acac9~mv2.png" -o public/respaldos/sep.png
curl -fsSL "$BASE/573f04_1961efea4b884f92a03112c33435f36f~mv2.jpg" -o public/respaldos/cambridge.jpg
curl -fsSL "$BASE/573f04_07a08f1cdc0b4d708ae0694872d95eaa~mv2.png/v1/crop/x_0,y_350,w_1080,h_379/fill/w_786,h_276,al_c,q_90/set.png" -o public/respaldos/set-tamaulipas.png
curl -fsSL "$BASE/573f04_ee9787537aa04eb18a82ec0ab30d0ded~mv2.png" -o public/respaldos/rvoe.png
curl -fsSL "$BASE/573f04_0ec8c32c46274993a73f08643f325041~mv2.png" -o public/respaldos/usicamm.png
curl -fsSL "$BASE/573f04_305a50335ec040c09b64582e8d584916~mv2.jpg" -o public/respaldos/uat.jpg

echo "Descargando plan de estudios de Preparatoria..."
curl -fsSL "$BASE/573f04_7c379238c80a4d3d93abd355332e3919~mv2.jpg/v1/crop/x_111,y_470,w_2369,h_2641/fill/w_1704,h_1900,al_c,q_90/plan.jpg" -o public/brand/plan-estudios-preparatoria.jpg

echo "Descargando fotos del claustro docente..."
# IMPORTANTE: verificar visualmente que cada foto corresponda al docente correcto
# (los nombres de archivo en Wix no siempre son explícitos).
mkdir -p public/claustro
curl -fsSL "$BASE/573f04_e939dfd978c145f2a2ec5359efc53f4c~mv2.jpg" -o public/claustro/reyna-torres.jpg
curl -fsSL "$BASE/573f04_64533d38f2a04e61a0995d28a1f8684a~mv2.jpg" -o public/claustro/arturo-cordova.jpg
curl -fsSL "$BASE/573f04_87a6442671644985a64d70090d742af3~mv2.jpg" -o public/claustro/eduardo-rodriguez.jpg
curl -fsSL "$BASE/573f04_0a0bfce7e7cc4861bed4092262de5493~mv2.jpg" -o public/claustro/ayerim-guillen.jpg
curl -fsSL "$BASE/573f04_dbb31cf2d7634930b5320b46d9dd0b40~mv2.jpg" -o public/claustro/sergio-arjona.jpg
curl -fsSL "$BASE/573f04_3fe05c2775c6474e9ab4a094fae9faf0~mv2.jpg" -o public/claustro/lourdes-avila.jpg
curl -fsSL "$BASE/573f04_35bb43768dde44c5915cdbf30f5cc7d1~mv2.jpeg" -o public/claustro/jose-cruz.jpg
curl -fsSL "$BASE/573f04_3ac47f711617496a87c7890e7846a7ba~mv2.jpg" -o public/claustro/amparo-gonzalez.jpg
curl -fsSL "$BASE/573f04_b9a8b5ed0538487280404db4717e67cb~mv2.jpg" -o public/claustro/javier-gonzalez.jpg
curl -fsSL "$BASE/573f04_1f5efa4880e3435f8c660b03409d721b~mv2.jpg" -o public/claustro/abril-segovia.jpg
curl -fsSL "$BASE/573f04_f6fb898a7a2940c2b7e199d9a47b8ddb~mv2.jpg" -o public/claustro/liliana-rocha.jpg
curl -fsSL "$BASE/573f04_6ecfa8094ccd40e1866c01d30be50f3d~mv2.jpg" -o public/claustro/edgar-duenas.jpg
curl -fsSL "$BASE/573f04_00419184e335479d9bb44d40e7bb5053~mv2.jpg" -o public/claustro/jorge-perez.jpg
curl -fsSL "$BASE/573f04_35314d2b607b4ef8a06e69912f537a90~mv2.jpeg" -o public/claustro/edgar-gonzalez.jpg
curl -fsSL "$BASE/573f04_0bef09e310844da9a80422e8bf513e05~mv2.jpeg" -o public/claustro/diana-martinez.jpg

echo ""
echo "Listo. Archivos descargados:"
ls -la public/respaldos/ public/claustro/ public/brand/plan-estudios-preparatoria.jpg
