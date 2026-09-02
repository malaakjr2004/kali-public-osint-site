## Summary

Describe the user-visible or security-relevant change.

## Scope and data handling

- [ ] This change preserves authorized, non-destructive scope.
- [ ] No credentials, tokens, cookies, personal data, or private targets are included.
- [ ] Any new outbound request or dependency is documented.
- [ ] Security-sensitive behavior has a bounded default and a safe failure mode.

## Validation

- [ ] `pnpm check`
- [ ] `pnpm build`
- [ ] `pnpm audit --prod --audit-level=high`
- [ ] Rendered website reviewed at relevant desktop/mobile widths (if UI changed)

## Notes for reviewers

List affected files, tradeoffs, and known limitations.
