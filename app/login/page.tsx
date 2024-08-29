"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );

  return (
    <main className="h-screen w-full overflow-hidden lg:grid lg:grid-cols-2">
      {/* Form */}
      <form
        action={formAction}
        className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center gap-6 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="peer block py-[9px] pl-10"
              />{" "}
              <AtSymbolIcon className="peer-focus:text-primary pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/#"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                className="peer block py-[9px] pl-10"
              />
              <KeyIcon className="peer-focus:text-primary pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
            </div>
          </div>
          {/* Login button */}
          <Button type="submit" className="w-full" aria-disabled={isPending}>
            Login <ArrowRightIcon className="ml-auto h-5 w-5 text-slate-50" />
          </Button>
        </div>

        {/* Sign up */}
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>

        {/* Error message */}
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
      {/* Picture */}
      <div className="bg-muted hidden lg:relative lg:block">
        <Image
          src="/login.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </main>
  );
}
