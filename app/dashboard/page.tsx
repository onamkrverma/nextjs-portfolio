"use client";
import Button from "@components/Button";
import Typography from "@components/Typography";
import { signOut } from "next-auth/react";
import React from "react";
import TaskListIcon from "@public/icons/task_list.svg";
import ArrowIcon from "@public/icons/arrow.svg";
import WorkHistoryIcon from "@public/icons/work_history.svg";
import Link from "next/link";

const Dashboard = () => {
  const exploreOption = [
    {
      title: "Project list",
      link: "/dashboard/project",
      icon: TaskListIcon,
    },
    {
      title: "Work Experience",
      link: "/dashboard/experience",
      icon: WorkHistoryIcon,
    },
  ];

  return (
    <main className="container !pr-0">
      <div className=" flex items-center justify-center relative">
        <Typography size="h5/semi-bold" className="text-lg sm:text-2xl">
          Admin Dashboard
        </Typography>
        <Button
          type="button"
          title="logout"
          variant="primary"
          className="absolute right-0 !bg-primary-50 !text-danger-600 gap-2 items-center !shadow-md !p-2"
          onClick={() =>
            signOut({ redirect: true, callbackUrl: "/dashboard/login" })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <span className="hidden sm:block">logout</span>
        </Button>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-center my-12">
        {exploreOption.map((opt, index) => (
          <Link
            key={index}
            title="Project"
            href={opt.link}
            className="group relative bg-primary-100 dark:bg-primary-900 border dark:border-primary-700 shadow-md p-6 rounded-xl"
          >
            <span className="hidden absolute top-2 right-2 group-hover:block">
              <ArrowIcon className="w-6 h-6 rotate-45 hidden sm:block dark:stroke-primary-50" />
            </span>
            <div className="flex flex-col items-center w-36 h-fit text-center transition ease-in-out duration-500 group-hover:scale-105">
              <opt.icon className="w-20 h-20" />
              <Typography>{opt.title}</Typography>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
