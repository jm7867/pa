#!/bin/bash

# ─────────────────────────────────────────────
#  generate-manifest.sh
#  Scans the nashed/ folder and creates
#  nashed/manifest.json with all audio files.
#
#  Usage:
#    chmod +x generate-manifest.sh
#    ./generate-manifest.sh
# ─────────────────────────────────────────────

FOLDER="nashed"
OUTPUT="$FOLDER/manifest.json"

# ── Check folder exists ──
if [ ! -d "$FOLDER" ]; then
  echo "❌  '$FOLDER' folder not found."
  echo "    Make sure you run this script from the same directory as your index.html"
  exit 1
fi

# ── Collect audio files (mp3, m4a, ogg, wav) sorted naturally ──
mapfile -t FILES < <(
  find "$FOLDER" -maxdepth 1 -type f \
    \( -iname "*.mp3" -o -iname "*.m4a" -o -iname "*.ogg" -o -iname "*.wav" \) \
  | sort -V \
  | xargs -I{} basename {}
)

# ── Check we found something ──
if [ ${#FILES[@]} -eq 0 ]; then
  echo "⚠️   No audio files found in '$FOLDER/'"
  echo "    Supported formats: .mp3  .m4a  .ogg  .wav"
  exit 1
fi

# ── Build JSON array ──
echo "[" > "$OUTPUT"

LAST=${#FILES[@]}
for i in "${!FILES[@]}"; do
  FILE="${FILES[$i]}"
  # Escape any double-quotes in filename (edge case)
  ESCAPED="${FILE//\"/\\\"}"
  if [ $((i + 1)) -lt $LAST ]; then
    echo "  \"$ESCAPED\"," >> "$OUTPUT"
  else
    echo "  \"$ESCAPED\""  >> "$OUTPUT"   # no trailing comma on last item
  fi
done

echo "]" >> "$OUTPUT"

# ── Summary ──
echo ""
echo "✅  manifest.json created → $OUTPUT"
echo "    Found ${#FILES[@]} file(s):"
echo ""
for FILE in "${FILES[@]}"; do
  echo "    • $FILE"
done
echo ""