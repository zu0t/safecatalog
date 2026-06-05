const appsData = [

  /* ── ANDROID · ORIGINAL ─────────────────────────────── */
  {
    id: 1, platform: "Android", type: "original",
    name: "Obtainium",
    description: "Fetches and auto-updates APKs directly from upstream sources (GitHub, F-Droid, APKMirror, etc.) without relying on Google Play. Great for staying on the latest release straight from the developer.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/ImranR98/Obtainium",
    downloadUrl: "https://github.com/ImranR98/Obtainium/releases",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },
  {
    id: 2, platform: "Android", type: "original",
    name: "F-Droid",
    description: "Open-source Android app repository containing only free/libre software. All apps are built from source by F-Droid, so you can inspect every build. No trackers, no ads.",
    safety: "safe", openSource: true,
    sourceUrl: "https://gitlab.com/fdroid/fdroidclient",
    downloadUrl: "https://f-droid.org/",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },

  /* ── ANDROID · MODDED ───────────────────────────────── */
  {
    id: 3, platform: "Android", type: "modded",
    name: "ReVanced Manager",
    description: "Official patcher for YouTube, Reddit, and other apps — adds ad-blocking, SponsorBlock, background playback, and more. Must be patched manually; only download from the official GitHub repo.",
    safety: "untested", openSource: true,
    sourceUrl: "https://github.com/ReVanced/revanced-manager",
    downloadUrl: "https://github.com/ReVanced/revanced-manager/releases",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Always verify the APK signature before installing."
  },
  {
    id: 4, platform: "Android", type: "modded",
    name: "HappyMod (unofficial)",
    description: "Unofficial distributor of modified APKs. Frequent reports of malware, adware, and unauthorized permission requests baked into uploaded files.",
    safety: "danger", openSource: false,
    sourceUrl: "", downloadUrl: "#",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "⚠ Malicious code detected in ~40 % of analyzed APKs. Avoid."
  },
  {
    id: 15, platform: "Android", type: "modded",
    name: "Honista instagram mod",
    description: "Unofficial modded Instagram APK with features like story downloading, ad removal, and UI tweaks.",
    safety: "safe", openSource: false,
    sourceUrl: "", downloadUrl: "https://t.me/Honistagram",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Subscription required for ad-blocking feature. Never purchase this subscription, there have been multiple reports of accounts getting hacked after providing your phone number. Mod is generaly safe. Always download from the official XDA thread and verify the APK signature before installing."
  },
  {
    id: 16, platform: "Android", type: "modded",
    name: "instander instagram mod",
    description: "Unofficial modded Instagram APK with features like story downloading, ad removal, and UI tweaks.",
    safety: "safe", openSource: false,
    sourceUrl: "", downloadUrl: "https://thedise.me/",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Outdated mod with no updates since 2022. Mod is generaly safe. Always download from the official XDA thread and verify the APK signature before installing. Download link may not be working (outdated project), avoid downloading from unverified sources."
  },
  {
    id: 17, platform: "Android", type: "modded",
    name: "PurrfectSnap snapchat mod",
    description: "Unofficial modded Snapchat APK with features like snapchat plus, ad removal, and UI tweaks.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/curious-freak/Purrfect", downloadUrl: "https://t.me/+KiYxSWgQmNhjNjc1",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Safe mod for snapchat. They also offer mods for other aplications like instagram. Always download from the official XDA thread and verify the APK signature before installing. Download link may not be working (outdated project), avoid downloading from unverified sources."
  },
  {
    id: 18, platform: "Android", type: "modded",
    name: "Revenge discord mod",
    description: "Unofficial modded Discord APK with features like themes and plugins.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/revenge-mod", downloadUrl: "https://github.com/revenge-mod/revenge-bundle?tab=readme-ov-file#%EF%B8%8F-download",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Safe mod for discord. Always download from the official XDA thread and verify the APK signature before installing. Download link may not be working (outdated project), avoid downloading from unverified sources."
  },

  /* ── ANDROID · CRACKED ──────────────────────────────── */
  {
    id: 5, platform: "Android", type: "cracked",
    name: "CapCut Pro (cracked)",
    description: "Unofficial cracked builds of CapCut removing ads and enabling premium features. No central distributor — quality and safety vary wildly between sources.",
    safety: "safe", openSource: false,
    sourceUrl: "", downloadUrl: "https://liteapks.com/capcut-video-editor.html",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "source is auditable, legal risk remains. Use at your own discretion."
  },

  /* ── WINDOWS · ORIGINAL ─────────────────────────────── */
  {
    id: 6, platform: "Windows", type: "original",
    name: "Winget (Windows Package Manager)",
    description: "Microsoft's official CLI package manager. Install and update thousands of verified apps from the command line. Pre-installed on Windows 11.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/microsoft/winget-cli",
    downloadUrl: "https://apps.microsoft.com/detail/9NBLGGH4NNS1",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },
  {
    id: 7, platform: "Windows", type: "original",
    name: "UniGetUI (WingetUI)",
    description: "A polished GUI front-end for Winget, Scoop, and Chocolatey. Manage packages, run updates, and roll back versions — all without touching the terminal.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/marticliment/UniGetUI",
    downloadUrl: "https://github.com/marticliment/UniGetUI/releases",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },

  /* ── WINDOWS · MODDED ───────────────────────────────── */
  {
    id: 8, platform: "Windows", type: "modded",
    name: "Winaero Tweaker",
    description: "All-in-one Windows customization tool. Unlock hidden settings, change UI behavior, tweak performance options, and control the Start menu beyond what Settings exposes.",
    safety: "safe", openSource: false,
    sourceUrl: "",
    downloadUrl: "https://winaero.com/winaero-tweaker/",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },
  {
    id: 9, platform: "Windows", type: "modded",
    name: "Open-Shell (Classic Shell fork)",
    description: "Restores the classic Windows 7-style Start menu and Explorer toolbar. Actively maintained fork of the discontinued Classic Shell project.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/Open-Shell/Open-Shell-Menu",
    downloadUrl: "https://github.com/Open-Shell/Open-Shell-Menu/releases",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },
  {
    id: 19, platform: "Windows", type: "modded",
    name: "Vesktop Discord mod",
    description: "Unofficial mod for the Discord desktop app that adds features like themes, plugins, and enhanced privacy controls.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/Vesktop/Vesktop",
    downloadUrl: "https://github.com/Vesktop/Vesktop/releases",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: "Using modded clients may violate Discord's Terms of Service. Use at your own risk. Always download from the official GitHub repo and verify the installer before running."
  },

  /* ── WINDOWS · CRACKED ──────────────────────────────── */
  {
    id: 10, platform: "Windows", type: "cracked",
    name: "KMSPico",
    description: "Illicit Windows and Office activator. Hundreds of infected clones circulate online containing ransomware, trojans, and crypto miners. Avoid entirely.",
    safety: "danger", openSource: false,
    sourceUrl: "", downloadUrl: "#",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "⚠ Violates Microsoft EULA. Hundreds of recorded malware infections per month."
  },
  {
    id: 11, platform: "Windows", type: "cracked",
    name: "MAS (Microsoft Activation Scripts)",
    description: "Open-source activation script using HWID / KMS38 / Online KMS methods. More transparent than binary activators — but still violates Microsoft licensing. Review the source before use.",
    safety: "untested", openSource: true,
    sourceUrl: "https://github.com/massgravel/Microsoft-Activation-Scripts",
    downloadUrl: "https://github.com/massgravel/Microsoft-Activation-Scripts",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Source is auditable, but legal risk remains. Use at your own discretion."
  },
  {
    id: 14, platform: "Windows", type: "cracked",
    name: "Sony Vegas Pro (cracked)",
    description: "Unofficial cracked versions of Sony Vegas Pro video editing software from Eintim (safe).  Other builds often contain malware, keyloggers, or backdoors. Avoid downloading from unverified sources.",
    safety: "safe", openSource: false,
    sourceUrl: "https://monarchforums.cc/index.php?threads/vegas-22-0-build-122-crack.310/",
    downloadUrl: "https://monarchforums.cc/index.php?threads/vegas-22-0-build-122-crack.310/",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one",
    notes: "Eintim is very known in the modding community. Source is auditable, but legal risk remains. Use at your own discretion."
  },


  /* ── LINUX · ORIGINAL ───────────────────────────────── */
  {
    id: 12, platform: "Linux", type: "original",
    name: "Flatpak",
    description: "Sandboxed application distribution system that works across distros. Apps run in an isolated environment with fine-grained permission control via portals.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/flatpak/flatpak",
    downloadUrl: "https://flatpak.org/setup/",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },
  {
    id: 13, platform: "Linux", type: "original",
    name: "Ventoy",
    description: "Create a multiboot USB drive by simply copying ISO files onto it — no reformatting needed. Supports 1000+ distros and WinPE images.",
    safety: "safe", openSource: true,
    sourceUrl: "https://github.com/ventoy/Ventoy",
    downloadUrl: "https://www.ventoy.net/en/download.html",
    lastChecked: "2026-06-05", reportEmail: "contact@safecatalog.one", notes: ""
  },

  /* ── LINUX · MODDED ─────────────────────────────────── */


  /* ── LINUX · CRACKED ────────────────────────────────── */


];