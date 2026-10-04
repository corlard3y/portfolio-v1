# Portfolio UTM links

Use these links when sharing the portfolio so Google Analytics can attribute visits to their source.

Base URL: `https://kolade.tech/`

## Ready-to-use links

| Channel | Link |
| --- | --- |
| LinkedIn | `https://kolade.tech/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio` |
| GitHub | `https://kolade.tech/?utm_source=github&utm_medium=social&utm_campaign=portfolio` |
| X | `https://kolade.tech/?utm_source=x&utm_medium=social&utm_campaign=portfolio` |
| Resume or CV | `https://kolade.tech/?utm_source=resume&utm_medium=document&utm_campaign=portfolio` |

## Distinguish individual posts or placements

Add `utm_content` when the same source has multiple links:

```text
https://kolade.tech/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=profile
https://kolade.tech/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=job_post
```

Keep source values lowercase and use underscores for multi-word values, for example `professional_network` or `job_application`.

## View results in Google Analytics

Open the GA4 property for `G-1HK7Y4THFG`, then go to:

**Reports → Acquisition → Traffic acquisition**

Use these dimensions to compare traffic:

- **Session source / medium**: where visitors came from, such as `linkedin / social`.
- **Session campaign**: the campaign name, currently `portfolio`.
- **Session manual ad content**: the optional `utm_content` value.

The portfolio already loads the GA4 tag in `src/layouts/Layout.astro`, so tagged landing URLs are captured automatically. The canonical URL remains untagged for SEO.
