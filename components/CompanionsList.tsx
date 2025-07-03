import { cn, getSubjectColor } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import Link from "next/link";
import Image from "next/image";

interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({title, companions, classNames}: CompanionsListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
        <h2 className="font-bold text-3xl mb-6">{title}</h2>
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-50/50">
                        <TableHead className="text-lg font-semibold text-gray-700 w-2/3 py-4">Lessons</TableHead>
                        <TableHead className="text-lg font-semibold text-gray-700 py-4">Subject</TableHead>
                        <TableHead className="text-lg font-semibold text-gray-700 text-right py-4">Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({id, subject, name, topic, duration}) => (
                        <TableRow key={id} className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-b-0">
                            <TableCell className="py-4">
                                <Link href={`/companions/${id}`} className="block">
                                  <div className="flex items-center gap-4">
                                    <div 
                                        className="size-16 flex items-center justify-center rounded-xl shadow-sm max-md:hidden transition-transform hover:scale-105" 
                                        style={{backgroundColor: getSubjectColor(subject)}}
                                    >
                                        <Image
                                             src={`/icons/${subject}.svg`}
                                             alt={subject}
                                             width={32}
                                             height={32}
                                          />
                                     </div>
                                     <div className="flex flex-col gap-1 min-w-0 flex-1">
                                        <p className="font-bold text-xl text-gray-900 truncate">
                                            {name}
                                        </p>
                                        <p className="text-base text-gray-600 truncate">
                                            {topic}
                                        </p>
                                    </div>
                                  </div>
                                </Link>
                            </TableCell>
                             
                            <TableCell className="py-4">
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize max-md:hidden">
                                        {subject}
                                    </div>
                                    <div 
                                        className="flex items-center justify-center rounded-lg w-10 h-10 md:hidden shadow-sm" 
                                        style={{backgroundColor: getSubjectColor(subject)}}
                                    >
                                        <Image
                                           src={`/icons/${subject}.svg`}
                                          alt={subject}
                                          width={18}
                                          height={18}
                                         />
                                     </div>
                                </div>
                            </TableCell>
                             
                            <TableCell className="py-4">
                                <div className="flex items-center gap-2 justify-end">
                                    <p className="text-xl font-semibold text-gray-900">
                                        {duration}
                                        <span className="max-md:hidden text-base font-normal text-gray-600 ml-1">mins</span>
                                    </p>
                                    <Image
                                         src="/icons/clock.svg"
                                         alt="minutes"
                                         width={16}
                                         height={16}
                                         className="opacity-60"
                                     />
                                </div>
                             </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </article>
  )
}

export default CompanionsList