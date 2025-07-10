## How to start

```
docker run 
    -d \
    -p 34539:1234 \
    -v you/markdown/file/path.md:/app/content.md \
    spectrpro/markdown-to-htmlweb
```

you need to change ```you/markdown/file/path.md```