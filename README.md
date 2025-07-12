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

## Star History

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=spectre-pro/markdown-to-htmlweb&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=spectre-pro/markdown-to-htmlweb&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=spectre-pro/markdown-to-htmlweb&type=Date" />
</picture>
