"use client";
import "@i18n";
import { FileOpenRounded, FolderRounded } from "@mui/icons-material";
import { accessControlProvider } from "@providers/access-control-provider";
import { authProviderClient } from "@providers/auth-provider/auth-provider.client";
import { dataProvider } from "@providers/data-provider";
import { I18nProvider, Refine } from "@refinedev/core";
import { RefineKbar } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ThemeProvider from "./theme-provider";

export default function ClientProvider({ children }: React.PropsWithChildren) {
  const { t, i18n } = useTranslation();
  const i18nProvider: I18nProvider = useMemo(
    () => ({
      changeLocale(locale, options) {
        i18n.changeLanguage(locale);
      },
      getLocale() {
        return i18n.language;
      },
      translate(key, options, defaultMessage) {
        return t(key, { defaultValue: defaultMessage });
      },
    }),
    [i18n, t]
  );

  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      notificationProvider={useNotificationProvider}
      authProvider={authProviderClient}
      accessControlProvider={accessControlProvider}
      i18nProvider={i18nProvider}
      resources={[
        {
          name: "blog_posts",
          list: "/blog-posts",
          create: "/blog-posts/create",
          edit: "/blog-posts/edit/:id",
          show: "/blog-posts/show/:id",
          meta: {
            canDelete: true,
            label: "Bài viết",
            icon: <FileOpenRounded />,
          },
        },
        {
          name: "categories",
          list: "/categories",
          create: "/categories/create",
          edit: "/categories/edit/:id",
          show: "/categories/show/:id",
          meta: {
            canDelete: true,
            label: "Danh mục",
            icon: <FolderRounded />,
          },
        },
      ]}
      options={{
        syncWithLocation: true,
        warnWhenUnsavedChanges: true,
        useNewQueryKeys: true,
        textTransformers: {
          humanize(text) {
            return text;
          },
          plural(word) {
            return word;
          },
          singular(word) {
            return word;
          },
        },
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>
      <RefineKbar />
    </Refine>
  );
}
