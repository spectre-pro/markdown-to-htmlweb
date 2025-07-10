## How to start

```
docker run \
    -d \
    -p 1234:1234 \
    -v your/markdown/file/path.md:/app/content.md \
    --restart unless-stopped \
    --name markdown-to-htmlweb \
    ghcr.io/spectre-pro/markdown-to-htmlweb
```

you need to change ```you/markdown/file/path.md```