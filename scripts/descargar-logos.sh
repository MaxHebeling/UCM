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

echo ""
echo "Listo. Archivos descargados:"
ls -la public/respaldos/ public/brand/plan-estudios-preparatoria.jpg
